import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem
} from "@/components/ui/sidebar.tsx";
import {Home, Settings} from "lucide-react";

export default function AppSidebar() {
    const items = [
        {
            title: 'Home',
            url: '/',
            icon: Home
        },
        {
            title: 'Settings',
            url: '/',
            icon: Settings
        },

    ]

    return (
        <Sidebar variant="floating" collapsible='icon'>
            <SidebarHeader/>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Forum</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {
                                items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon/>
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup/>
            </SidebarContent>
            <SidebarFooter/>
        </Sidebar>
    )
}