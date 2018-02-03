//
//  RNViewController.m
//  ReactApp
//
//  Created by Yale Li on 30/01/2018.
//  Copyright © 2018 YL. All rights reserved.
//

#import "RNViewController.h"
#import <React/RCTRootView.h>
#import "AppDelegate.h"

@interface RNViewController ()

@end

@implementation RNViewController

- (void)loadView {
    
    NSURL *jsCodeLocation = nil;
    if (IS_DEV) {
        jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    } else {
        jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"bundle/main.jsbundle" withExtension:nil];
    }

    RCTRootView *root = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:@"MyReactNativeApp" initialProperties:nil launchOptions:nil];
    self.view = root;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.title = @"React";
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
