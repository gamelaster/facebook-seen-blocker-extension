window.chrome.webRequest.onBeforeRequest.addListener(
  page => {
    return {
      cancel: true,
    };
  },
  {
    urls: [
      '*://messenger.com/ajax/mercury/mark_seen.php*',
      '*://www.messenger.com/ajax/mercury/mark_seen.php*',
      '*://messenger.com/ajax/mercury/change_read_status.php*',
      '*://www.messenger.com/ajax/mercury/change_read_status.php*',
      '*://facebook.com/ajax/mercury/change_read_status.php*',
      '*://www.facebook.com/ajax/mercury/change_read_status.php*',
      '*://facebook.com/ajax/mercury/mark_seen.php*',
      '*://www.facebook.com/ajax/mercury/mark_seen.php*'
    ]
  },
  [ 'blocking' ]
);