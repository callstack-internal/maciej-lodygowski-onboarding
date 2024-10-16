
#if RCT_NEW_ARCH_ENABLED
#import <React/RCTViewComponentView.h>
#import <QuartzCore/QuartzCore.h>

@interface ConicGradientViewComponentView: RCTViewComponentView

@property(nonatomic, readonly, strong) CAGradientLayer * _Nonull layer;

@end

#endif
