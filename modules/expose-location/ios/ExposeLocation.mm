#import "ExposeLocation.h"

@interface ExposeLocation() <CLLocationManagerDelegate>
@property (strong, nonatomic) CLLocationManager *locationManager;
@property (copy, nonatomic) RCTPromiseResolveBlock resolve;
@property (copy, nonatomic) RCTPromiseRejectBlock reject;
@end

@implementation ExposeLocation
RCT_EXPORT_MODULE()

- (instancetype)init {
    self = [super init];
    if(self) {
        self.locationManager = [[CLLocationManager alloc] init];
        self.locationManager.delegate = self;
    }
    
    return self;
}

RCT_EXPORT_METHOD(requestLocationPermission:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
    self.resolve = resolve;
    self.reject = reject;
    
    CLAuthorizationStatus status = [CLLocationManager authorizationStatus];
    
    if(status == kCLAuthorizationStatusNotDetermined) {
        [self.locationManager requestWhenInUseAuthorization];
    }else if(status == kCLAuthorizationStatusDenied || status == kCLAuthorizationStatusRestricted) {
        reject(@"permission_denied", @"Location permission denied", nil);
    }else {
        resolve(@(YES));
    }
}

RCT_EXPORT_METHOD(getCurrentLocation:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
    self.resolve = resolve;
    self.reject = reject;
    
    CLAuthorizationStatus status = [CLLocationManager authorizationStatus];
    
    if(status == kCLAuthorizationStatusAuthorizedWhenInUse || status == kCLAuthorizationStatusAuthorizedAlways ) {
        [self.locationManager startUpdatingLocation];
    }else {
        reject(@"permission_not_granted",@"Location permission not granted", nil);
    }
}

#pragma mark - CLLocationManagerDelegate

- (void)locationManager:(CLLocationManager *)manager didChangeAuthorizationStatus:(CLAuthorizationStatus)status {
    if(status == kCLAuthorizationStatusAuthorizedWhenInUse || status == kCLAuthorizationStatusAuthorizedAlways) {
        if(self.resolve){
            self.resolve(@(YES));
        }
    }else if(status == kCLAuthorizationStatusDenied || status == kCLAuthorizationStatusRestricted) {
        if(self.reject){
            self.reject(@"permission_denied", @"Location permission denied", nil);
        }
    }
}

- (void)locationManager:(CLLocationManager *)manager didUpdateLocations:(nonnull NSArray<CLLocation *> *)locations {
    CLLocation *location = [locations lastObject];
    if(location) {
        NSDictionary *locationData = @{
            @"latitude": @(location.coordinate.latitude),
            @"longitude": @(location.coordinate.longitude)
        };
        
        if(self.resolve){
            self.resolve(locationData);
            self.resolve = nil;
            self.reject = nil;
        }
       
        [self.locationManager stopUpdatingLocation];
    }
}

- (void)locationManager:(CLLocationManager *)manager didFailWithError:(nonnull NSError *)error {
    if(self.reject){
        self.reject(@"location_error", @"Failed to get location", error);
        self.resolve = nil;
        self.reject = nil;
    }
}

@end
