interface VehicleListFiltersProps {
  filterText: string;
  setFilterText: any;
  unassignedOnly: boolean;
  setUnassignedOnly: any;
}

export default function VehicleListFilters({
  filterText,
  setFilterText,
  unassignedOnly,
  setUnassignedOnly,
}: VehicleListFiltersProps) {

  return (
    <form>
      <label>
        Driver
        <input
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </label>
      <label>
        Unassigned
        <input
          type="checkbox"
          checked={unassignedOnly}
          onChange={(e) => setUnassignedOnly(e.target.checked)}
        />
      </label>
    </form>
  );
}
