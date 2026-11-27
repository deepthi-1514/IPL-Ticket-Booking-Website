import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eetwgmoxspzteqlveyio.supabase.co";
const supabaseKey = "sb_publishable_4EhOvaAVZLoUQqTn5aF54A_G_OXb1XS";

export const supabase = createClient(supabaseUrl, supabaseKey);

