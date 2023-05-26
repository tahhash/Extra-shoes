import { Button, Card } from "@mui/material";
import { H5 } from "components/Typography";
import { FlexBetween } from "components/flex-box";
import DataListTable from "./table";

// table column list
const tableHeading = [
  {
    id: "orderId",
    label: "رقم الطلب",
    alignRight: false,
  },
  {
    id: "product",
    label: "المنتج",
    alignRight: false,
  },
  {
    id: "payment",
    label: "الدفع",
    alignRight: false,
  },
  {
    id: "amount",
    label: "المبلغ",
    alignCenter: true,
  },
];

// ===================================================

// ===================================================

const RecentPurchase = ({ data }) => {
  return (
    <Card>
      <FlexBetween px={3} py={2.5}>
        <H5>المشتريات الأخيرة</H5>

        <Button size="small" color="info" variant="outlined">
        جميع الطلبات
        </Button>
      </FlexBetween>

      <DataListTable
        dataList={data}
        tableHeading={tableHeading}
        type="RECENT_PURCHASE"
      />
    </Card>
  );
};
export default RecentPurchase;
