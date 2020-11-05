import { Injectable } from '@angular/core';
import { Event } from './Event'
@Injectable({
    providedIn:'root'
})
export class EventService {
    data: Event[] = [
        new Event("12/12/2020",
            " .NET Conference",
            "https://www.dotnetfest.com/assets/img/sliders/9.jpg",
            "lorem ipsum",1),
            new Event("06/06/2021",
            "Hardkiss",
            "https://promoter-production-images.s3.amazonaws.com/uploads/event/new_promo_image/12696/450.jpg",
            "lorem ipsum",2),
            new Event("05/11/2020",
            "Web Conference",
            "https://www2020.thewebconf.org/public/resources/images/fb-cover.png",
            "lorem ipsum",3),
            new Event("25/12/2020",
            "JS first 2020",
            "https://miro.medium.com/max/3840/1*XsZqvasNMdE5dUm02S_2Hw.png",
            "lorem ipsum",4),

    ];
    hiddenData:Event[]=[];
    getAllEvents():Event[]
    {
        return this.data;
    }
    getHiddenEvents():Event[]
    {
        return this.hiddenData;
    }
    addToHidden(id:number)
    {
        console.log(id);
        let index=0;
        for(let item of this.data)
        {
            if(item.id==id)
            {
                
                item.hidden=true;
                this.hiddenData.push(item);
                this.data.splice(index,1);
                break;
            }
            
            index++;
        }

    }
    removeFromHidden(id:number)
    {
        let index=0;
        for(let item of this.hiddenData)
        {
            if(item.id==id)
            {
                
                item.hidden=false;
                this.data.push(item);
                this.hiddenData.splice(index,1);
                break;
            }
            index++;
        }
    }
}
