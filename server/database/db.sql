create TABLE users(user_name VARCHAR(50), password VARCHAR(100), created_at timestamp with time zone NOT NULL DEFAULT now(), updated_at timestamp with time zone NOT NULL DEFAULT now());