import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import Aside from "./aside";
import Projects from "./projects";
import MobileProjectSlider from "./MobileProjectSlider";
import { useScrollBoundary } from "../hooks/useScrollBoundary";
import { PROJECTS } from "@/constants/projects";

export default function ScreenFour() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [transition, setTransition] = useState({
    direction: null,
    currentProject: "project-one",
    nextProject: null
  });
  
  const wheelRef = useRef(null);
  const projectContentRef = useRef(null);
  const isProcessing = useRef(false);

  // Initialize scroll boundary detection for project content (desktop only)
  const { 
    canScrollDown, 
    canScrollUp, 
    hasOverflow, 
    isAtTop, 
    isAtBottom 
  } = useScrollBoundary(projectContentRef, !isMobile);

  const projects = Object.fromEntries(
    PROJECTS.map(({ id, ...props }) => [id, { component: Projects, props }])
  );

  const projectKeys = Object.keys(projects);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      
      // Ignore small wheel movements and rapid scrolling
      if (isProcessing.current || Math.abs(e.deltaY) < 5 || e.deltaY > 50) return;
      
      const direction = e.deltaY > 0 ? 'down' : 'up';

      // NEW: Check scroll boundaries before transitioning between projects
      if (hasOverflow && projectContentRef.current) {
        if (direction === 'down' && canScrollDown) {
          // Scroll project content down instead of transitioning
          projectContentRef.current.scrollTop += e.deltaY;
          return;
        }
        if (direction === 'up' && canScrollUp) {
          // Scroll project content up instead of transitioning
          projectContentRef.current.scrollTop += e.deltaY;
          return;
        }
      }

      // Only trigger project transitions at boundaries or when no overflow
      const currentIndex = projectKeys.indexOf(transition.currentProject);

      // Prevent scrolling past first/last project
      if ((direction === 'down' && currentIndex === projectKeys.length - 1) ||
          (direction === 'up' && currentIndex === 0)) {
        return;
      }
      
      isProcessing.current = true;
      
      let nextProject;
      if (direction === 'down') {
        nextProject = projectKeys[currentIndex + 1];
      } else {
        nextProject = projectKeys[currentIndex - 1];
      }
      
      setTransition({
        direction,
        currentProject: transition.currentProject,
        nextProject
      });
    };
    
    const currentRef = wheelRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, [transition, projectKeys, hasOverflow, canScrollDown, canScrollUp]);

  // Handle transition completion
  useEffect(() => {
    if (transition.nextProject) {
      const timer = setTimeout(() => {
        setTransition(prev => ({
          ...prev,
          currentProject: prev.nextProject,
          nextProject: null,
          direction: null
        }));
        
        // Reset scroll position to top when transitioning to new project
        if (projectContentRef.current) {
          projectContentRef.current.scrollTop = 0;
        }
        
        isProcessing.current = false;
      }, 800); // Matches CSS transition duration

      return () => clearTimeout(timer);
    }
  }, [transition]);

  // Animation styles based on scroll direction
  const getProjectStyles = (type) => {
    if (!transition.direction) {
      return {
        transform: 'translateY(0) scale(1)',
        opacity: 1,
        transition: 'all 0.8s ease',
        filter: 'blur(0)'
      };
    }

    if (type === 'current') {
      return {
        transform: transition.direction === 'down' 
          ? 'translateY(-100%) scale(0.9)' 
          : 'translateY(100%) scale(0.9)',
        opacity: 0,
        transition: 'all 0.8s ease',
        filter: 'blur(4px)'
      };
    } else {
      return {
        transform: transition.direction === 'down'
          ? 'translateY(-100%) scale(0.9)'
          : 'translateY(100%) scale(0.9)',
        opacity: 0,
        transition: 'all 0.8s ease',
        filter: 'blur(4px)'
      };
    }
  };

  const CurrentProject = projects[transition.currentProject].component;
  const currentProps = projects[transition.currentProject].props;
  
  const NextProject = transition.nextProject 
    ? projects[transition.nextProject].component 
    : null;
  const nextProps = transition.nextProject 
    ? projects[transition.nextProject].props 
    : null;

  // Mobile Layout - Horizontal Slider
  if (isMobile) {
    return (
      <Box
        id="screen-four"
        sx={{
          width: '100%',
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        <MobileProjectSlider projects={projects} />
      </Box>
    );
  }

  // Desktop Layout
  return (
    <Box
      id="screen-four"
      ref={wheelRef}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Sidebar - Desktop only */}
      <Box>
        <Aside activeProject={transition.currentProject} />
      </Box>

      <Box sx={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        marginLeft: '250px',
        height: '100vh'
      }}>
        {/* Current Project */}
        <Box 
          ref={projectContentRef}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflow: 'auto',
            ...getProjectStyles('current')
          }}
        >
          <CurrentProject {...currentProps} />
        </Box>

        {/* Next Project (during transition) */}
        {NextProject && (
          <Box sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            ...getProjectStyles('next')
          }}>
            <NextProject {...nextProps} />
          </Box>
        )}
      </Box>
    </Box>
  );
}