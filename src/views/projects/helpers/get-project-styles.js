export function getProjectStyles(direction) {
  if (!direction) {
    return {
      transform: 'translateY(0) scale(1)',
      opacity: 1,
      transition: 'all 0.8s ease',
      filter: 'blur(0)',
    };
  }
  return {
    transform:
      direction === 'down'
        ? 'translateY(-100%) scale(0.9)'
        : 'translateY(100%) scale(0.9)',
    opacity: 0,
    transition: 'all 0.8s ease',
    filter: 'blur(4px)',
  };
}
