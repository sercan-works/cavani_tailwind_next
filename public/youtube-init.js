// YouTube API'sini önceden yüklemek için script
if (typeof window !== 'undefined') {
  // YouTube API'sini global olarak kullanılabilir yap
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
} 