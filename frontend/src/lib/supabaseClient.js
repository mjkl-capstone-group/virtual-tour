import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://myephipkoeurrrfzwqzz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15ZXBoaXBrb2V1cnJyZnp3cXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNTc2NjAsImV4cCI6MjA1NjYzMzY2MH0.pGpr6G6u8LM3sQzwoOWQ16_MKUhG0D1JQc4PhP1ehN8";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
