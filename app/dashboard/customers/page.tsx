import { Metadata } from 'next';
import { Suspense } from 'react';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';

export const metadata: Metadata = {
  title: 'customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);

  return (
      <Suspense fallback={<CustomersTableSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
  );
}
