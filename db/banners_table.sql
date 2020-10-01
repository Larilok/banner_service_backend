create table if not exists banners
(
    id serial primary key,
    title varchar(256),
    text varchar(256),
    pictureUrl varchar(256) not null,
    startDate timestamp,
    endDate timestamp,
    isActive bool default false,
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp
    constraint check_dates
        check (startDate <= endDate)
);

create or replace function set_timestamp()
returns trigger as
$$
begin
    new.updatedAt = current_timestamp;
    return new;
end;
$$ language plpgsql;

create trigger on_update before update on banners
    for each row execute procedure set_timestamp();
