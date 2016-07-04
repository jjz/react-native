

#import "RNAlert.h"
#import <UIKit/UIKit.h>

@implementation RNAlert

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(show:(NSString *)msg){

  UIAlertView * alertView=[[UIAlertView alloc] initWithTitle:@"react-native" message:msg delegate:nil cancelButtonTitle:@"关闭" otherButtonTitles:nil, nil];
    [alertView show];

}



@end
