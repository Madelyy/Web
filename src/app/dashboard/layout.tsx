import DashboardShell from "@/app/dashboard/Dashboard/DashboardShell"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardShell>
            {children}
        </DashboardShell>
    )
}