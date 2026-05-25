// Stub: Supabase removed. Using Firebase instead.
export function createAdminClient() {
  return {
    from: () => ({
      select: () => ({ data: [], error: null }),
      insert: async () => ({ data: null, error: null }),
      update: () => ({ eq: async () => ({ data: null, error: null }) }),
      delete: () => ({ eq: async () => ({ data: null, error: null }) }),
      eq: function() { return this; },
      single: async () => ({ data: null, error: null }),
    }),
  } as any;
}
