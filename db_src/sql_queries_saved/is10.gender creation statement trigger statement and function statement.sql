CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table is10.gender (
	gender_id UUID primary key default uuid_generate_v4(),
	gender varchar not null,
	create_date timestamptz not null default current_timestamp,
	last_modified_date timestamptz not null
)

create function update_last_modified_date() returns trigger as $$
begin 
	NEW.last_modified_date := current_timestamp;
return NEW;
end ;
$$ language plpgsql;


CREATE TRIGGER
  update_last_modified_date
BEFORE UPDATE ON
  is10.gender 
FOR EACH ROW EXECUTE PROCEDURE
  update_last_modified_date();

