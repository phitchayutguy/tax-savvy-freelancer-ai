
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: ReactNode;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
}

const StatCard = ({
  title,
  value,
  description,
  icon,
  trend,
  trendValue,
  className,
}: StatCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-2">{value}</h3>
            {description && (
              <p className="text-xs text-muted-foreground mt-1">{description}</p>
            )}
            {trend && trendValue && (
              <div className="mt-2 flex items-center">
                <span
                  className={cn(
                    "text-xs font-medium flex items-center",
                    trend === "up" && "text-green-500",
                    trend === "down" && "text-red-500"
                  )}
                >
                  {trend === "up" && "↑ "}
                  {trend === "down" && "↓ "}
                  {trendValue}
                </span>
                <span className="text-xs text-muted-foreground ml-1">
                  {trend === "up" && "เพิ่มขึ้นจากเดือนที่แล้ว"}
                  {trend === "down" && "ลดลงจากเดือนที่แล้ว"}
                  {trend === "neutral" && "เทียบกับเดือนที่แล้ว"}
                </span>
              </div>
            )}
          </div>
          {icon && <div className="text-muted-foreground">{icon}</div>}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
