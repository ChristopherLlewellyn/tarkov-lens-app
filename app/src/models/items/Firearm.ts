import { BaseItem } from './BaseItem'

export class Firearm extends BaseItem {
  class = '';
  caliber = '';
  ergonomics = 0;
  recoilVertical = 0;
  recoilHorizontal = 0;
  velocity = 0;
  modes: string[] = [];
  rateOfFire = 0;
  type = '';
  effectiveDistance = 0;

  constructor(
    id = '',
    blightbusterIcon = '',
    _id = '',
    name = '',
    shortName = '',
    description = '', 
    _kind = '', 
    weight = 0, 
    price = 0, 
    maxStack = 0, 
    rarity = '', 
    lastLowestMarketPrice = 0,
    avg24hPrice = 0,
    avg7daysPrice = 0,
    updated = new Date(),
    diff24h = 0,
    diff7days = 0,
    icon = '',
    wikiLink = '',
    img = '',
    imgBig = ''
  ) {
    super(
      id, 
      blightbusterIcon, 
      _id, 
      name, 
      shortName, 
      description, 
      _kind, 
      weight, 
      price, 
      maxStack, 
      rarity, 
      lastLowestMarketPrice,
      avg24hPrice,
      avg7daysPrice,
      updated,
      diff24h,
      diff7days,
      icon,
      wikiLink,
      img,
      imgBig
    )
  }
}
