

#import "RNIOSAlert.h"
#import "RCTConvert.h"

@implementation RNIOSAlert

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(show:(NSString *)msg){

  UIAlertView * alertView=[[UIAlertView alloc] initWithTitle:@"react-native" message:msg delegate:nil cancelButtonTitle:@"关闭" otherButtonTitles:nil, nil];
    [alertView show];

}

RCT_EXPORT_METHOD(showTime:(NSDictionary*)dict){
  NSDate * date =[RCTConvert NSDate:dict[@"time"]];
  UIAlertView * alertView=[[UIAlertView alloc] initWithTitle:@"react-native" message:[date description] delegate:nil cancelButtonTitle:@"关闭" otherButtonTitles:nil, nil];
  [alertView show];

  
}


@end
