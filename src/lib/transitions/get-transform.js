export function getTransform(direction, role) {
  if (!direction) {
    return {
      transform: 'translateY(0) scale(1) rotateX(0deg)',
      opacity: 1,
      filter: 'blur(0px)',
    };
  }

  if (role === 'current') {
    return {
      transform:
        direction === 'down'
          ? 'translateY(120%) scale(0.8) rotateX(-15deg)'
          : 'translateY(-120%) scale(0.8) rotateX(15deg)',
      opacity: 0.3,
      filter: 'blur(8px)',
    };
  }

  return {
    transform:
      direction === 'down'
        ? 'translateY(-120%) scale(0.9) rotateX(15deg)'
        : 'translateY(120%) scale(0.9) rotateX(-15deg)',
    opacity: 0.7,
    filter: 'blur(4px)',
  };
}
