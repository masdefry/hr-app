import BottomNavigation from '@/components/BottomNavigation';

export default function DashboardLayout({children}: Readonly<{
    children: React.ReactNode;
}>){
    return(
        <main>
            {children}
            <BottomNavigation />
        </main>
    )
}