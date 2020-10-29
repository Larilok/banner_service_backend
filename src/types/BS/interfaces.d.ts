declare namespace BS {
  interface BannerReturn {
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

  interface BannerInsert {
    title: string,
    text: string,
    pictureUrl: string,
    startDate?: Date,
    endDate?: Date,
    isActive?: boolean,
  }

  interface IBanner {
    id:number
  }

  interface IAddBanner {
    banner:BannerInsert
  }

}
