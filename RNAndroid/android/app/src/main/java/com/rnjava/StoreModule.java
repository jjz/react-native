package com.rnjava;

import android.content.Context;
import android.content.SharedPreferences;
import android.text.TextUtils;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

import java.util.Map;

import javax.annotation.Nullable;

public class StoreModule extends ReactContextBaseJavaModule {

    private final String USER_NAME = "user_name";
    private final String PASSWORD = "password";


    private SharedPreferences preferences = getReactApplicationContext().getSharedPreferences("user", Context.MODE_PRIVATE);


    public StoreModule(ReactApplicationContext reactContextBaseJavaModule) {
        super(reactContextBaseJavaModule);
    }

    @Override
    public String getName() {
        return "StoreModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return super.getConstants();
    }

    @ReactMethod
    public void addUser(String userName, String password, Callback successCallback, Callback errorCallback) {
        try {
            if (TextUtils.isEmpty(userName)) {
                errorCallback.invoke("user name is empty");
                return;
            }
            if (TextUtils.isEmpty(password)) {
                errorCallback.invoke("password is empty");
                return;
            }
            preferences.edit().putString(USER_NAME, userName).commit();
            preferences.edit().putString(PASSWORD, password).commit();
            successCallback.invoke("add user success");
        } catch (Exception e) {
            e.printStackTrace();
            errorCallback.invoke(e.getMessage());
        }
    }

    @ReactMethod
    public void login(String userName, String password, Promise promise) {
        String storeUserName = preferences.getString(USER_NAME, "");
        String storePassword = preferences.getString(PASSWORD, "");
        if (!equalsString(userName, storeUserName)) {
            promise.reject("0", "user name is wrong");
            return;

        }
        if (!equalsString(password, storePassword)) {
            promise.reject("1", "password is wrong");
            return;

        }
        WritableMap map = Arguments.createMap();
        map.putDouble("user_id", 1);
        promise.resolve(map);

    }

    private boolean equalsString(String string, String otherString) {
        if (string == null) {
            return otherString == null;
        } else {
            return string.equals(otherString);
        }

    }


}
