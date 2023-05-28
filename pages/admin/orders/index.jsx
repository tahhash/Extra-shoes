import { Box, Card, Stack, Table, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import { H3 } from "components/Typography";
import Scrollbar from "components/Scrollbar";
import SearchArea from "components/dashboard/SearchArea";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import useMuiTable from "hooks/useMuiTable";
import { OrderRow } from "pages-sections/admin";
import api from "utils/__api__/dashboard";
// TABLE HEADING DATA LIST
const tableHeading = [
  {
    id: "id",
    label: "معرّف الطلب",
    align: "left",
},
{
    id: "qty",
    label: "الكمية",
    align: "left",
},
{
    id: "purchaseDate",
    label: "تاريخ الشراء",
    align: "left",
},
{
    id: "billingAddress",
    label: "عنوان الفوترة",
    align: "left",
},
{
    id: "amount",
    label: "المبلغ",
    align: "left",
},
{
    id: "status",
    label: "الحالة",
    align: "left",
},
{
    id: "action",
    label: "إجراء",
    align: "center",
},
];

// =============================================================================
OrderList.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

// =============================================================================

export default function OrderList({ orders }) {
  // RESHAPE THE ORDER LIST BASED TABLE HEAD CELL ID
  const filteredOrders = orders.map((item) => ({
    id: item.id,
    qty: item.items.length,
    purchaseDate: item.createdAt,
    billingAddress: item.shippingAddress,
    amount: item.totalPrice,
    status: item.status,
  }));
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData: filteredOrders,
    defaultSort: "purchaseDate",
    defaultOrder: "desc",
  });
  return (
    <Box py={4}>
      <H3 mb={2}>الطلبات</H3>

      <SearchArea
        handleSearch={() => {}}
        buttonText="إنشاء طلب"
        handleBtnClick={() => {}}
        searchPlaceholder="البحث عن الطلب..."
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
                {filteredList.map((order) => (
                  <OrderRow order={order} key={order.id} />
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
  const orders = await api.orders();
  return {
    props: {
      orders,
    },
  };
};
