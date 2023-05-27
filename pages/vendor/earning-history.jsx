import { RemoveRedEye } from "@mui/icons-material";
import { Box, Card, Stack, Table, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import Scrollbar from "components/Scrollbar";
import { H3 } from "components/Typography";
import useMuiTable from "hooks/useMuiTable";
import {
  StyledIconButton,
  StyledTableCell,
  StyledTableRow,
} from "pages-sections/admin";
import api from "utils/__api__/dashboard";
import { currency } from "lib";
const tableHeading = [
  {
    id: "no",
    label: "رقم",
    align: "left",
  },
  {
    id: "orderNo",
    label: "رقم الطلب",
    align: "left",
  },
  {
    id: "adminCommission",
    label: "عمولة المشرف",
    align: "center",
  },
  {
    id: "earning",
    label: "أرباحك",
    align: "center",
  },
  {
    id: "date",
    label: "التاريخ",
    align: "left",
  },
  {
    id: "action",
    label: "الإجراءات",
    align: "center",
  },
];

// =============================================================================
EarningHistory.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

// =============================================================================

export default function EarningHistory({ earnings }) {
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData: earnings,
    defaultSort: "no",
  });
  return (
    <Box py={4}>
      <H3 mb={2}>سجل الأرباح</H3>

      <Card>
        <Scrollbar>
          <TableContainer
            sx={{
              minWidth: 1100,
            }}
          >
            <Table>
              <TableHeader
                order={order}
                hideSelectBtn
                orderBy={orderBy}
                heading={tableHeading}
                rowCount={earnings.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((item, index) => (
                  <StyledTableRow role="checkbox" key={index}>
                    <StyledTableCell align="left">{item.no}</StyledTableCell>
                    <StyledTableCell align="left">
                      {item.orderNo}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      {currency(item.adminCommission)}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      {currency(item.sellerEarning)}
                    </StyledTableCell>
                    <StyledTableCell align="left">{item.date}</StyledTableCell>

                    <StyledTableCell align="center">
                      <StyledIconButton>
                        <RemoveRedEye />
                      </StyledIconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(earnings.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}
export const getStaticProps = async () => {
  const earnings = await api.earningHistory();
  return {
    props: {
      earnings,
    },
  };
};
