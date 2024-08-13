package com.exposelocation

import com.facebook.react.bridge.*

abstract class ExposeLocationSpec internal constructor(context: ReactApplicationContext) :
  ReactContextBaseJavaModule(context), ActivityEventListener {

  abstract fun requestLocationPermission(promise: Promise)
  abstract fun getCurrentLocation(promise: Promise)
}
