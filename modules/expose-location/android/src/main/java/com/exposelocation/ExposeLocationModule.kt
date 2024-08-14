package com.exposelocation

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import android.location.Location
import androidx.core.app.ActivityCompat
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationServices

class ExposeLocationModule internal constructor(context: ReactApplicationContext) : ExposeLocationSpec(context) {

  private var fusedLocationClient: FusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(reactApplicationContext)
  private var permissionPromise: Promise? = null

  init {
    reactApplicationContext.addActivityEventListener(this)
  }

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  override fun requestLocationPermission(promise: Promise) {
    val activity = currentActivity
    if(activity != null){
      if(ActivityCompat.checkSelfPermission(activity, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
        ActivityCompat.requestPermissions(activity, arrayOf(Manifest.permission.ACCESS_COARSE_LOCATION), 1)
        this.permissionPromise = promise;
      }else {
        promise.resolve(true)
      }
    }else {
      promise.reject("Activity not found")
    }
  }

  @ReactMethod
  override fun getCurrentLocation(promise: Promise) {
    val activity = currentActivity
    if (activity != null) {
      if (ActivityCompat.checkSelfPermission(activity, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
        promise.reject("permission_not_granted", "Location permission not granted")
        return
      }
      fusedLocationClient.lastLocation.addOnSuccessListener { location: Location? ->
        if (location != null) {
          val locationData = Arguments.createMap().apply {
            putDouble("latitude", location.latitude)
            putDouble("longitude", location.longitude)
          }
          promise.resolve(locationData)
        } else {
          promise.reject("location_error", "Failed to get location")
        }
      }.addOnFailureListener {
        promise.reject("location_error", it.localizedMessage)
      }
    } else {
      promise.reject("Activity not found")
    }
  }

  companion object {
    const val NAME = "ExposeLocation"
  }

  // Handle the permission request result
  override fun onActivityResult(activity: Activity?, requestCode: Int, resultCode: Int, data: Intent?) {
    // No need to handle this for location permissions
  }

  override fun onNewIntent(intent: android.content.Intent?) {
    // No implementation needed for this example
  }
}
