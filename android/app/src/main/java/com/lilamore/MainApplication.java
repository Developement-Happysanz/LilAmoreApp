package com.lilamore;

import android.app.Application;

import com.facebook.react.ReactApplication;
//import com.facebook.reactnative.androidsdk.FBSDKPackage;
//import co.apptailor.googlesignin.RNGoogleSigninPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
//import com.facebook.FacebookSdk;
//import com.facebook.CallbackManager;
//import com.facebook.appevents.AppEventsLogger;

//import co.apptailor.googlesignin.RNGoogleSigninPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

//  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();
//
//  protected static CallbackManager getCallbackManager() {
//    return mCallbackManager;
//  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {


    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage()
//            new RNGoogleSigninPackage(),
//            new FBSDKPackage(mCallbackManager)
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return true;
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
