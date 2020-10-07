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

//     id serial primary key,
//     title varchar(256),
//     text varchar(256),
//     pictureUrl varchar(256) not null,
//     startDate timestamp,
//     endDate timestamp,
//     isActive bool default false,
//     createdAt timestamp default current_timestamp,
//     updatedAt timestamp default current_timestamp
