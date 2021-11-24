import clothes from './gifs/clothes.gif';
import youtube from './gifs/youtube.gif';
import internetsurf from './gifs/internetsurf.gif';
import sleep from './gifs/sleep.gif';
import homestuck from './gifs/homestuck.gif';
import textnotif from './gifs/textnotif.gif';
import dirtyclothes from './gifs/dirtyclothes.gif';
import bingewatch from './gifs/bingewatch.gif';
import toofar from './gifs/toofar.gif';
import messyhair from './gifs/messyhair.gif';
import noexercise from './gifs/noexercise.gif';
import late from './gifs/late.gif';
import freespace from './gifs/freespace.gif';
import takeaway from './gifs/takeaway.gif';
import food from './gifs/food.gif';
import buyonline from './gifs/buyonline.gif';
import sleepclass from './gifs/sleepclass.gif';
import ignorecall from './gifs/ignorecall.gif';
import oversleep from './gifs/oversleep.gif';
import bored from './gifs/bored.gif';
import breakfast from './gifs/breakfast.gif';
import pyjamas from './gifs/pyjamas.gif';
import chargerbed from './gifs/chargerbed.gif';
import homework from './gifs/homework.gif';
import messybun from './gifs/messybun.gif';

export const mockData = [
	{ id: 1, streak: false, checked: false, coords: [ 0, 0 ], title: 'uses the floor as a wardrobe', image: clothes },
	{ id: 2, streak: false, checked: false, coords: [ 0, 1 ], title: 'watches YouTube all day', image: youtube },
	{
		id: 3,
		streak: false,
		checked: false,
		coords: [ 0, 2 ],
		title: 'obsessed with the internet',
		image: internetsurf
	},
	{ id: 4, streak: false, checked: false, coords: [ 0, 3 ], title: 'sleeps a lot', image: sleep },
	{ id: 5, streak: false, checked: false, coords: [ 0, 4 ], title: 'never goes outside', image: homestuck },
	{ id: 6, streak: false, checked: false, coords: [ 1, 0 ], title: 'never replies to texts', image: textnotif },
	{
		id: 7,
		streak: false,
		checked: false,
		coords: [ 1, 1 ],
		title: 'wears the same outfit for 3 days in a row',
		image: dirtyclothes
	},
	{ id: 8, streak: false, checked: false, coords: [ 1, 2 ], title: 'Bingewatch TV', image: bingewatch },
	{ id: 9, streak: false, checked: false, coords: [ 1, 3 ], title: "It's too far", image: toofar },
	{ id: 10, streak: false, checked: false, coords: [ 1, 4 ], title: 'messy hair', image: messyhair },
	{ id: 11, streak: false, checked: false, coords: [ 2, 0 ], title: "doesn't exercise often", image: noexercise },
	{ id: 12, streak: false, checked: false, coords: [ 2, 1 ], title: 'late for school', image: late },
	{ id: 13, streak: false, checked: true, coords: [ 2, 2 ], title: 'free space', image: freespace },
	{ id: 14, streak: false, checked: false, coords: [ 2, 3 ], title: 'orders takeaways often', image: takeaway },
	{ id: 15, streak: false, checked: false, coords: [ 2, 4 ], title: 'food', image: food },
	{ id: 16, streak: false, checked: false, coords: [ 3, 0 ], title: 'buys everything online', image: buyonline },
	{ id: 17, streak: false, checked: false, coords: [ 3, 1 ], title: 'fails classes', image: sleepclass },
	{ id: 18, streak: false, checked: false, coords: [ 3, 2 ], title: "doesn't answer phone calls", image: ignorecall },
	{ id: 19, streak: false, checked: false, coords: [ 3, 3 ], title: 'oversleeps', image: oversleep },
	{
		id: 20,
		streak: false,
		checked: false,
		coords: [ 3, 4 ],
		title: 'sits in the same place/position for hours',
		image: bored
	},
	{ id: 21, streak: false, checked: false, coords: [ 4, 0 ], title: 'breakfast for dinner', image: breakfast },
	{ id: 22, streak: false, checked: false, coords: [ 4, 1 ], title: 'wears pyjamas all day', image: pyjamas },
	{ id: 23, streak: false, checked: false, coords: [ 4, 2 ], title: 'has a charger by their bed', image: chargerbed },
	{ id: 24, streak: false, checked: false, coords: [ 4, 3 ], title: 'never does homework', image: homework },
	{ id: 25, streak: false, checked: false, coords: [ 4, 4 ], title: 'messy buns', image: messybun }
];
