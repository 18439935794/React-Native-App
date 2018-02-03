//
//  AppDelegate.h
//  ReactApp
//
//  Created by Yale Li on 30/01/2018.
//  Copyright © 2018 YL. All rights reserved.
//

#import <UIKit/UIKit.h>

#ifdef DEBUG
#define IS_DEV YES

#else
#define IS_DEV NO

#endif

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;


@end

