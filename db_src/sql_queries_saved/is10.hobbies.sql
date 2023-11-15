create table is10.hobbies(
	hobby_id UUID primary key default uuid_generate_v4(),
	hobby_description varchar unique not null,
	hobby_category_id uuid references is10.hobby_categories not null,
	hobby_group_id uuid references is10.hobby_groups not null,
	level_of_importance is10_scale not null,
	create_date timestamptz not null default current_timestamp,
	last_modified_date timestamptz not null
)


create type is10_scale as enum ('1','2','3','4','5','6','7','8','9','10')

create table is10.hobbies_category (
	hobby_category_id uuid primary key default uuid_generate_v4(),
	hobby_category varchar unique not null
)

create table is10.hobby_groups (
	hobby_group_id uuid primary key default uuid_generate_v4(),
	hobby_group varchar unique not null
)

alter table is10.gender rename to genders
