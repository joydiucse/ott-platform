export const formatDuration = (duration) => {
  if (!duration) return '';
  
  // Handle cases where duration might be in "HH:MM:SS" or "HH:MM" format
  const parts = duration.split(':').filter(Boolean);
  
  if (parts.length === 3) { // HH:MM:SS format
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    
    // Only show hours if > 0
    return hours > 0 
      ? `${hours}h ${minutes}m` 
      : `${minutes}m`;
  }
  else if (parts.length === 2) { // HH:MM format
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    
    return hours > 0 
      ? `${hours}h ${minutes}m` 
      : `${minutes}m`;
  }
  
  // Return original if format doesn't match
  return duration;
};