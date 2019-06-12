import { trigger, transition, state, style, animate } from '@angular/animations';

export const popup = trigger('popup', [
    state('start', style({
        'left': '50vw',
        'opacity': '0',
        'height': '0vw',
        'top': '50vh',
        'width':'0vw'
    })),
    state('end', style({
        'top': 'calc(50vh - 125px)',
        'left':  'calc(50vw - 200px)',
        'opacity': '1',
        'height': '250px',
        'width':'400px'
    })),
    state('endXs', style({
        'top': 'calc(50vh - 125px)',
        'left':  'calc(50vw - 150px)',
        'opacity': '1',
        'height': '250px',
        'width':'300px'
    })),
    transition('start <=> end', animate(200)),
    transition('start <=> endXs', animate(200)),
    
])