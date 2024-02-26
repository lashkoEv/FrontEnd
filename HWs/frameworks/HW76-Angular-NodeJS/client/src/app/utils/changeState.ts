import { toLowerCaseTrimmer } from './toLowerCaseTrimmer';

export function changeStateByKey(arr: any[],
   link:{ textContent: string },
   key:string, newValue: any
): any[] {
    return arr.map(topic => {
        const topicLabel = toLowerCaseTrimmer(topic.label);
        const linkLabel = toLowerCaseTrimmer(link.textContent);
    
        if(linkLabel === topicLabel) {
          topic[key] = newValue;
          console.log(topic)
        }else{

          topic[key] = false;
        }


        return topic;
    });
}