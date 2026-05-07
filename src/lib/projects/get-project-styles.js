export function getProjectStyles(direction, role = 'current') {
  if (!direction) {
    return {
      transform: 'translateY(0) scale(1)',
      opacity: 1,
      transition: 'all 0.8s ease',
      filter: 'blur(0)',
    };
  }
  if (role === 'next') {
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
        ? 'translateY(-100%) scale(0.94)'
        : 'translateY(100%) scale(0.94)',
    opacity: 0,
    transition: 'all 0.8s ease',
    filter: 'blur(4px)',
  };
}
