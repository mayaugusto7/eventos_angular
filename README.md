# Dispatcher Event
# $scope.emit
# Disparando um evento para cima do filho para o pai.
$scope.$emit('myCustomEvent', 'Data to send');

# Dispatcher Event
# $scope.$broadcast
# Disparando um evento de cima para baixo pai pra filho e subfilhos
$scope.$broadcast('myCustomEvent', {
  someProp: 'Sending you an Object!' // send whatever you want
});

# Event Listener
# Listen for the event in the relevant $scope
$scope.$on('myCustomEvent', function (event, data) {
  console.log(data); // 'Data to send'
});