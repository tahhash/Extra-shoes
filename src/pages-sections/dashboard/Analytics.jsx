import { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { styled, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ApexChart from "components/ApexChart";
import { H5 } from "components/Typography";
import { FlexBetween } from "components/flex-box";
import { analyticsChartOptions } from "./chartsOptions";
const categories = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// styled component
const StyledSelect = styled(Select)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  color: theme.palette.grey[600],
  "& fieldset": {
    border: "0 !important",
  },
  "& .MuiSelect-select": {
    padding: 0,
    paddingRight: "8px !important",
  },
}));
const Analytics = () => {
  const theme = useTheme();
  const [selectType, setSelectType] = useState("yearly");
  const series = [
    {
      name: "المبيعات",
      data: [
        15000, 45000, 12000, 50000, 75000, 13000, 30000, 99000, 75000, 90000,
        55000, 15000,
      ],
    },
    {
      name: "المصاريف",
      data: [
        1500, 48000, 19000, 59000, 25000, 9000, 36000, 9000, 79000, 70000,
        57000, 5000,
      ],
    },
  ];
  return (
    <Card
      sx={{
        p: 3,
      }}
    >
      <FlexBetween>
        <H5>تحليلات</H5>

        <StyledSelect
          value={selectType}
          IconComponent={() => <KeyboardArrowDown />}
          onChange={(e) => setSelectType(e.target.value)}
        >
          <MenuItem value="yearly">سنويًا</MenuItem>
          <MenuItem value="monthly">شهريًا</MenuItem>
          <MenuItem value="Weekily">أسبوعيًا</MenuItem>
        </StyledSelect>
      </FlexBetween>

      <ApexChart
        type="bar"
        height={300}
        series={series}
        options={analyticsChartOptions(theme, categories)}
      />
    </Card>
  );
};
export default Analytics;
