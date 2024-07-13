class Phone{

    call(user){
      console.log("Calling: " + user);
    }
  }
  class Smartphone extends Phone{
    videoCall(user){
      console.log("Facetiming: " + user);
    }
  }
  
  const device = new Smartphone("Brandon");
  device.call("Mom");
  device.videoCall("Dad");