ALTER TABLE public.game_results
  ADD CONSTRAINT game_results_game_type_check_v2
  CHECK (game_type = ANY (ARRAY[
    'cat'::text,
    'stakeholder'::text,
    'timeline'::text,
    'codenames'::text,
    'quotes'::text
  ])) NOT VALID;

ALTER TABLE public.game_results
  VALIDATE CONSTRAINT game_results_game_type_check_v2;

ALTER TABLE public.game_results
  DROP CONSTRAINT game_results_game_type_check;

ALTER TABLE public.game_results
  RENAME CONSTRAINT game_results_game_type_check_v2
  TO game_results_game_type_check;
