
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://poalnwtjpxjklnzjdpca.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvYWxud3RqcHhqa2xuempkcGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1Mjg2NjcsImV4cCI6MjAzODEwNDY2N30.qXo2O82YjSO2zfntElrmrOELCAvVnU4vYGRC8nXso1k'
export const supabase = createClient(supabaseUrl, supabaseKey)