package com.awesomeproject;

import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context){
        super(context);
    }

    @Override
    public String getName(){
        return "CalendarModuleCustom";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location){
        Log.d("Module name is: ", name + location);
    }
}
