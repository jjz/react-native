

#import "RNIOSAlert.h"
#import "RCTConvert.h"


@implementation RNIOSAlert{
  RCTResponseSenderBlock _alertCallback;
}

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


RCT_EXPORT_METHOD(showAlertAndCallback:(RCTResponseSenderBlock)callback){
  _alertCallback=callback;
  UIAlertView * alertView=[[UIAlertView alloc] initWithTitle:@"react-native" message:@"是否继续？" delegate:self cancelButtonTitle:@"关闭" otherButtonTitles:@"继续", nil];
  [alertView show];

  
}

-(void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex{
  if (buttonIndex==0) {
    _alertCallback(@[@"cancel",]);
  }else{
    _alertCallback(@[[NSNull null],@1]);
  }
  

}


@end
