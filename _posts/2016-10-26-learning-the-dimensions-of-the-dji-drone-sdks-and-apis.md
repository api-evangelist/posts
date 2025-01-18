---
layout: post
title: Learning The Dimensions Of The DJI Drone SDKs And APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/dji_phantom_3_pro.png
atomdate: 2016-10-26T20:00:00.000Z
tags:
  - SDK
  - APIs
  - Dimensions
  - Learning
  - SDKs
---
I am going through the [DJi DJI drone developer area which has three distinct SDKs](https://developer.dji.com/), which allow us to leverage a variety of APIs that make the drone magic happen. I'm still wrapping my head around the intersection of drones and APIs, and this is my attempt to distil down what I'm finding in their developer area, and absorb some of what is going across the industry. This is not  meant to be a complete list. It is meant for my learning, and hopefully yours along the way.

There are a variety of devices being connected to the Internet, but other than the automobile I don't think there is another object that is as complex as the drone. I'm fascinated by what is possible with this device, and the variety of APIs it has, the interaction with the RC controller, mobile device, and with other resources the clouds. I personally fly a DJI drone, so I am going through the DJI developer area, learning about their three SDKs, as they seem to be the ecosystem furthest along in their understanding the API potential -- think Twitter for IoT.

**[The DJI Onboard SDK](https://developer.dji.com/onboard-sdk/)**   
This SDK allows for communication with the DJI flight controller over a direct serial connection, to monitor and control aircraft flight behavior with the Onboard API while utilizing the built-in Intelligent Navigation Modes to create autonomous flight paths and maneuvers. Some of the actions for the onboard SDK are:

*   **Activation -** Before you start exploring DJI Onboard SDK functionality via our ROS examples, you will need to go through the "Activation" process.
*   **Obtain/Release Flight Control -** Managing the process to get flight control.
*   **Take Off -** Initiate a take-off for the drone.
*   **Landing -** Tell the device to land.
*   **Go Home** \- Tell the device to go home.
*   **Gimbal Control** \- Manage gimbal for camera.
*   **Altitude Control -** Manage the altitude for the drone.
*   **Photo Taking -** Allow for taking photos
*   **Start/Stop Video Recording -** Start and stop the video for camera.
*   **Virtual RC Control -** Control the drone through serial port by simulated channel values.
*   **Broadcast Frequency Control -** Manage which frequency drone is broadcasting on.
*   **Arm/Disarm Control -** Arm or disram the controls.
*   **Timestamp Synchronization -** Synchronize the timestamp - 
*   **Native Waypoint -** Manage the waypoints for mission.
*   **Hotpoint -** Manage the hotpoint for circling.
*   **Local Navigation -** Go to specified local position
*   **Global Navigation -** Go to specified global position
*   **Waypoint Navigation -** Manage flying through a series of GPS coordinates)
*   **WebSocket With Baidu Map (for navigation) -** Real time mapping.
*   **MAVLink And QGroundStation -** Managing the vehicle to air communication. 

These are the actions that onboard SDK open up, but the SDK has other layers, that go beyond the drone itself, and is more about the space and environment around a drone, and its interaction with this world.

**Velodyne LiDAR  
**Light Detection and Ranging (LiDAR) sensors are for commercial UAS applications, such as 3D aerial mapping, surveying, inspection, collision avoidance, and autonomous navigation in potentially either indoor and outdoor environments. There are three distinct elements of the drones LiDAR system:

*   **Lidar API** \- Supporting the computation of point cloud and logging LiDAR data in real-time into a standard LAS (LiDAR Aerial Survey) or PCAP (packet capture) file
*   **Lidar Simulator -** A LiDAR simulator for playing back PCAP files in real-time via the same Ethernet output as a real LiDAR for facilitating development and debugging for the system integration
*   **Lidar Logging -** An API based example to demonstrate how to use the API of real-time point cloud computation and LAS/PCAP logging. It can also be used for the use case of the integration of Velodyne LiDAR with M100 without the onboard SDK

LiDAR opens up another universe within the DJI onboard SDK, allowing for access the system through API, manage the logging around activity, also simulating common navigation elements in the environment.

**uAvionix ADS-B Receiver**  
The pingRX ADS-B receiver allows the drone to receive real-time traffic information broadcasted by other manned or unmanned aircraft, as well as temporary flight restriction (TFR) information broadcasted by the government. With this type of situation awareness, the onboard embedded system (OES) will be able to make some safety-critical decisions like collision avoidance or self-separation.

**Precision Trajectory Mission Planning**  
With the Onboard SDK Precision Trajectory Mission Planning suite, DJI developers can now plan complex missions without having to use GPS waypoints. The new DJI Precision Trajectory Mission Planning library has the flexibility to deal with complicated trajectories, issues with GPS accuracy and cases when GPS is simply unavailable. 

*   Trajectory following library that can autonomously execute preplanned smooth spiral trajectories
*   SketchUp plugin to visualize trajectories, import 3D CAD models and geolocate the scene
*   Configurable speed, start/end radii and pitch for the spiral
*   Start your drone from anywhere - real-time path planning to get to the trajectory's GPS location
*   Integration with DJI Assistant 2 to visualize simulations of the drone following the trajectory in the SketchUp scene

That is a pretty robust SDK. I'm taking the time to learn about each action, as well as the more communication and mission planning components separately. I can tell that they are having trouble to keep the large amounts of functionality and features coherent, and organized in the documentation, one of the reasons I'm breaking out separately here on my blog.

**[DJI Guidance SDK  
](https://developer.dji.com/guidance-sdk/)**Guidance SDK enables allows you to develop vision-based applications, by granting you full control over drone guidance. You can access all output data for any device using the DJI Guidance SDK--they break things down into five separate groups.

**Initialization**

*   **Reset Config -** Clear subscribed configure, if you want to subscribe data different from last time.
*   **Initialize Transfer -** Initialize Guidance and create data transfer thread.

**Subscription Data**

*   **IMU -** Subscribe Inertia Measurement Unit (IMU) data.
*   **Ultrasonic -**  Subscribe ultrasonic data.
*   **Velocity -** Subscribe velocity data, i.e. velocity of Guidance in body coordinate system.
*   **Obstacle Distance -** Subscribe obstacle distance.
*   **Depth Image -** Subscribe rectified greyscale image.
*   **Disparity Image -** Subscribe disparity image, which can be filtered with functions such as filterSpeckles.
*   **Greyscale Image -** Subscribe rectified greyscale image.
*   **Motion -** Subscribe global motion data, i.e. velocity and position of Guidance in global coordinate system.

**Set Callback and Exposure**

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/mobile_sdk_54b1bdda33.png)

*   **Event Handler -** Set callback function handler. When data from Guidance comes, it will be called by data transfer thread.
*   **Exposure Parameters -** Get stereo calibration parameters.

**Get Data**

*   **Get Online Status -** Get the online status of Guidance sensors.
*   **Get Sterio Calibration** \- Get stereo calibration parameters.
*   **Get Device Type -**  Get the type of devices. Currently only support one type of device: Guidance
*   **Get Image Size -** Get the size of image data.

**Transfer Control**

*   **Start Transfer -** Inform guidance to start data transfer.
*   **Stop Transfer -** Inform guidance to stop data transfer.
*   **Release Transfer -** Release the data transfer thread.
*   **Wait For Board Ready -** Set callback function handler. When data from guidance comes, it will be called by data transfer thread.

This SDK seems to be real time senses of the drone, allowing you to develop the experience you need to be in control, and guiding the device. 

**Data Types  
**One of the thing that captivates me about the whole drone thing is its data collection capacity. I'm still learning about what is possible with the drone itself, but I know that much of the value generated by these flights will be based on the data that is gathered, as well as the images and video recorded. Here are the data points I have found so far in the DJI documentation for the DJI Guidance SDK.

*   **Error Code -** Enumerates possible error codes. When error occurs, usually an error code will be given, and the developer can reference this enum to find the error type.
*   **Velocity Data -** Velocity in body frame. The unit is millimeter/second and the frequency is 10 Hz.
*   **Obstacle Distance Data -** Obstacle distance from five Guidance Sensors. The unit is centimeter and the frequency is 20 Hz.
*   **IMU Data -** IMU data including accelerometer (in unit of acceleration of gravity g) and gyroscope (in quaternion format) data. The frequency is 20 Hz.
*   **Motion Data -** Pose and velocity data including quaternion orientation, position in the global frame, velocity in the global frame.
*   **Ultrasonic Data -** Outputs ultrasonic data from five Guidance Sensors, including obstacle distance (in unit of meter) and reliability of the data. The frequency is 20 Hz.
*   **Greyscale Image -** Outputs Greyscale images for five directions. The image size is 320\*240 bytes for individual sensor. The default frequency is 20 Hz and can be scaled down using API functions.
*   **Depth Image -** Outputs depth images for five directions. The image size is 320\*240\*2 bytes for each direction. The default frequency is 20 Hz and can be scaled down using API functions.
*   **Disparity Image -** Outputs disparity images for five directions. This data is useful when developers want to further refine the disaprity images using functions like speckle filter. 

This data is generated constantly by a drone, and you have control over this transfer process through the DJI Guidance SDK. I'm thinking I need to aggregate some JSON schemas for this data, to better help me understand the depth and relationships in this data. There is a lot going on here, and a wealth of data to consider in a wide range of scenarios. 

**DJI Drone Mobile SDK**  
I use the DJI drone application to operate my two drones. The DJI Drone Mobile SDK is where you can get to work crafting your own custom application, to deliver exactly the drone operation experience you want. This is what the iPhone application was for mobile, but this is for the consumer and commercial drone world. There are a wealth of areas you can develop around in this SDK:

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/onboard_sdk_d6bc94cc85.png)

*   **[Flight Controller](https://developer.dji.com/mobile-sdk/documentation/introduction/component-guide-flightController.html)** - The flight controller is an onboard computer that combines control information from the pilot with sensor information to adjust the thrust at each propellor and fly the aircraft as desired.
*   **[Camera](https://developer.dji.com/mobile-sdk/documentation/introduction/component-guide-camera.html)** - The camera captures photos and videos. Many different modes of operation, resolutions, frame rates, exposure settings, picture settings and file types can be selected. Cameras have local storage to hold the media which will typically be an SD card, and in some cases an SSD (solid state drive).
*   **[Gimbal](https://developer.dji.com/mobile-sdk/documentation/introduction/component-guide-gimbal.html)** - Cameras fixed to an aircraft will record images that pitch and roll with the aircraft as it moves. Multi rotor aircraft need to pitch and roll simply to move horizontally, and so getting a stable horizontal shot is not possible.
*   **[Airlink](https://developer.dji.com/mobile-sdk/documentation/introduction/component-guide-airlink.html)** - AirLink describes the wireless link between aircraft, remote controllers, handheld cameras and mobile devices.
*   **[Remote Controller](https://developer.dji.com/mobile-sdk/documentation/introduction/component-guide-remotecontroller.html)** - The remote controller allows manual flight, gimbal and camera control, and provides a robust wireless control link for aircraft. The mobile device can connect to the remote controller to communicate to the aircraft and receive the live video stream from the camera.
*   **[Smart Battery](https://developer.dji.com/mobile-sdk/documentation/introduction/component-guide-battery.html)** \- Smart batteries provide the energy required to run the products. Together with the flight controller, the smart battery can estimate remaining flight time and provide warnings when low battery thresholds are crossed. Batteries are easily swapped between flights, extending product use considerably.
*   **[Missions](https://developer.dji.com/mobile-sdk/documentation/introduction/component-guide-missions.html)** - Missions can be used to easily automate flight. There are many different mission types that offer different product behavior. Some missions can be uploaded to and managed by the aircraft, while other missions are managed from the mobile device. 
*   **[SDK Manager](https://developer.dji.com/mobile-sdk/documentation/introduction/sdk-guide-sdkmanager.html) -** Application registration to use the DJI Mobile SDK, product connection, debugging and logging services are handled through the SDK manager class DJISDKManager.

I think that this stack of features speaks for itself. Providing a wealth of valuable API-driven resources to think about. This blows my mind as I begin to think about the possibilities for developing drone applications but gets even better when you think about how this also applies to the rest of the IoT world. Flight controller might not apply universally, but cameras, batteries, remote control, and the network are all ubiquitous with other IoT devices, and in my world should be considered beyond just drones.

I just needed to wrap my head around what programmatic resources are available to me as a DJI drone operator and developer. Next, I will be diving in and learning about some of the more interesting layers of this drone ecosystem, but first I am more interested in spending time looking through the platform API and SDK resources for other drone platforms, as well as some of the data solution providers like [Airmap](https://www.airmap.com/), and other physical components providers like [FLIR for imaging](http://www.flir.com/home/), and [LumeCube for lighting](https://www.lumecube.com/). I am always having to pick my battles on how deep on want to go down each rabbit hole or stay at the high level for a wider perspective.

There is a lot going on here. I find drones fascinating from a technical perspective, and terrifying when it comes to surveillance, privacy, policing, and some of the other bad behavior we've seen recently. Like other areas of the tech space, I think APIs are important for not just managing devices and the experience, but also provide transparency, logging, auditing, and other [observability considerations](http://apievangelist.com/2016/10/25/thinking-about-an-api-observability-stack/) when it comes to the Internet of Things space.