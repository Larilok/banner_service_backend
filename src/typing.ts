export interface BannerReturn {
  id: number,
  title?: string,
  text?: string,
  pictureUrl: string,
  startDate?: string,
  endDate?: string,
  isActive?: boolean,
  createdAt: string,
  updatedAt: string
}

export interface BannerInsert {
  title: string,
  text: string,
  pictureUrl: string,
  startDate?: Date,
  endDate?: Date,
  isActive?: boolean,
}

export interface IBanner {
  id: number
}

export interface IAddBanner {
  banner: BannerInsert
}

export interface IRedisStringRecord {
  key: string,
  value: string
}

export interface IRedisExpire {
  key: string,
  seconds: number
}
