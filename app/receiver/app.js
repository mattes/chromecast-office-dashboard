const NAMESPACE_URN = "urn:x-cast:chromecast-office-dashboard.firebaseapp.com";

var castReceiverManager = cast.receiver.CastReceiverManager.getInstance();

// ignore disconnect event
castReceiverManager.onSenderDisconnected = function(e){};

var customMessageBus = castReceiverManager.getCastMessageBus(NAMESPACE_URN, cast.receiver.CastMessageBus.MessageType.JSON);
customMessageBus.onMessage = function(event) {
  console.log(event.data);

  var d = event.data;

  var parser = document.createElement('a');
  parser.href = d.url;

  castReceiverManager.setApplicationState(parser.host);
  // document.getElementById("page").src = d.url;

  window.location.href = d.url;
}

castReceiverManager.start({statusText: 'Dashboard starting ...'});
