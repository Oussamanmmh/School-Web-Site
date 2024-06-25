import { createClient } from '@supabase/supabase-js'


const supabaseUrl = "https://jqoterucegfaobgjzhed.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impxb3RlcnVjZWdmYW9iZ2p6aGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyNjk0NzMsImV4cCI6MjAzNDg0NTQ3M30.Y2MCY218lf-YVy7DcgnjnwUoHH9c33AZRyRzvuT7dv4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase