import { TRole } from '@fms/entities';
import {
  ControlledFieldCheckbox,
  ControlledFieldSelect,
  DataTable,
} from '@fms/organisms';
import { ColumnDef } from '@tanstack/react-table';
import { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';

export const EditRole: FC = (): ReactElement => {
  const roles = [
    { label: 'Super Admin', value: 'super admin' },
    { label: 'Admin', value: 'admin' },
  ];
  const { control } = useForm();
  const dataRoles = [
    { id: 1, name: 'Warehouse', permission: 'read' },
    { id: 2, name: 'Back Office', permission: 'read' },
    { id: 3, name: 'Client', permission: 'read' },
  ];
  const columns: ColumnDef<TRole>[] = [
    {
      header: 'Nama Modul',
      accessorKey: 'name',
      cell: ({ cell }) => <p>{cell.row.original.name}</p>,
    },
    {
      header: 'Jenis Permission',
      accessorKey: 'permission',
      cell({ row }) {
        return (
          <form className="flex gap-x-1">
            <ControlledFieldCheckbox
              name="permission"
              control={control}
              label="Aksi"
              size="sm"
            />
            <ControlledFieldCheckbox
              name="permission"
              control={control}
              label="Lihat"
              size="sm"
            />
            <ControlledFieldCheckbox
              name="permission"
              control={control}
              label="Tambah"
              size="sm"
            />
            <ControlledFieldCheckbox
              name="permission"
              control={control}
              label="Ubah"
              size="sm"
            />
          </form>
        );
      },
    },
  ];
  return (
    <section className="w-full min-h-screen">
      <div>
        <p className="text-grey-400">
          Roles List / <span className="text-success-600">Edit</span>
        </p>
        <h1 className="text-2xl font-bold my-4">Edit Role</h1>
      </div>
      <form className=" flex flex-col gap-y-4 w-full h-auto bg-white rounded-md p-4">
        <div>
          <ControlledFieldSelect
            name="roles"
            options={roles}
            control={control}
            label="Nama Role"
            size="sm"
            required
          />
        </div>

        <div className='flex flex-col gap-y-2'>
          <h3>Role Permissions :</h3>
          <DataTable data={dataRoles as []} columns={columns} />
        </div>
      </form>
    </section>
  );
};
