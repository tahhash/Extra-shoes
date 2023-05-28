import { Box, Card, Stack, Table, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import { H3 } from "components/Typography";
import Scrollbar from "components/Scrollbar";
import SearchArea from "components/dashboard/SearchArea";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import useMuiTable from "hooks/useMuiTable";
import { CustomerRow } from "pages-sections/admin";
import api from "utils/__api__/dashboard";

// table column list
const tableHeading = [
  {
    id: "name",
    label: "الاسم",
    align: "left",
  },
  {
    id: "phone",
    label: "الهاتف",
    align: "left",
  },
  {
    id: "email",
    label: "البريد الإلكتروني",
    align: "left",
  },
  {
    id: "balance",
    label: "رصيد المحفظة",
    align: "left",
  },
  {
    id: "orders",
    label: "عدد الطلبات",
    align: "left",
  },
  {
    id: "action",
    label: "الإجراءات",
    align: "center",
  },
];

// =============================================================================
CustomerList.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

// =============================================================================

export default function CustomerList({ customers }) {
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData: customers,
  });
  return (
    <Box py={4}>
      <H3 mb={2}>زبون</H3>

      <SearchArea
        handleSearch={() => {}}
        buttonText="إضافة زبون"
        handleBtnClick={() => {}}
        searchPlaceholder="Search Customer..."
      />

      <Card>
        <Scrollbar>
          <TableContainer
            sx={{
              minWidth: 900,
            }}
          >
            <Table>
              <TableHeader
                order={order}
                hideSelectBtn
                orderBy={orderBy}
                heading={tableHeading}
                numSelected={selected.length}
                rowCount={filteredList.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((customer) => (
                  <CustomerRow customer={customer} key={customer.id} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(filteredList.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}
export const getStaticProps = async () => {
  const customers = await api.customers();
  return {
    props: {
      customers,
    },
  };
};
