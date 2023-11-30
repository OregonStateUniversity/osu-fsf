<!-- This Div contains everything for the base layout of the site -->
<nav class="view-events">

    <div class="flex">
        <!-- Black Vertical Banner -->
        <div class="h-screen bg-light-black fixed top-0 left-0 p-2" style="width: 16%">
            <!--Logo and Faculty Fitness Text-->
            <img class="h-auto w-auto p-2" src="../../OSU_Logo.png" alt="OSU Logo">
            <p class="text-white mt-1 ml-3 font-bold p-4">Faculty Staff Fitness</p>
            <!-- This contains the Home,Events, Settings icons and text -->
            <div class="flex-1 flex flex-col h-full space-y-1">
                <!-- Each flex container inside contains the Text and the icon next to each other -->
                <div class="flex items-center">
                    <img class="h-[50%] max-w-[50%] mt-2.5 ml-8" src="../../home_icon.png" alt="home icon">
                    <p class="text-white mx-3 mt-3">Home</p>
                </div>
                
                <div class="flex items-center">
                    <img class="h-[50%] max-w-[50%] mt-2.5 ml-8" src="../../calendar_icon.png" alt="calendar icon">
                    <p class="text-white mx-3 mt-3">Events</p>
                </div>
                <!-- The settings icon was more fidgety than other icons, so the style is more custom -->
                <div class="flex items-center">
                    <img class="h-[65%] max-w-[65%] mt-2.5"  style="margin-left: 1.65rem;" src="../../settings_icon.png" alt="settings icon">
                    <p class="text-white mt-1" style="margin-left: .4rem">Settings</p>
                </div>



                </div>
           </div>
    </div>
</nav>
<!-- This is where your content will go if you use the layout -->
<slot>

</slot>