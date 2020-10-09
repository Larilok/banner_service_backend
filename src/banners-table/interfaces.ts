export interface Banner {
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
  title?: string,
  text?: string,
  pictureUrl: string,
  startDate?: string,
  endDate?: string,
  isActive?: boolean,
}
